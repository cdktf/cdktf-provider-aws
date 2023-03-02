# `connectUserHierarchyGroup` Submodule <a name="`connectUserHierarchyGroup` Submodule" id="@cdktf/provider-aws.connectUserHierarchyGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConnectUserHierarchyGroup <a name="ConnectUserHierarchyGroup" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_group aws_connect_user_hierarchy_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.Initializer"></a>

```typescript
import { connectUserHierarchyGroup } from '@cdktf/provider-aws'

new connectUserHierarchyGroup.ConnectUserHierarchyGroup(scope: Construct, id: string, config: ConnectUserHierarchyGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupConfig">ConnectUserHierarchyGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupConfig">ConnectUserHierarchyGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.resetParentGroupId">resetParentGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.resetId"></a>

```typescript
public resetId(): void
```

##### `resetParentGroupId` <a name="resetParentGroupId" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.resetParentGroupId"></a>

```typescript
public resetParentGroupId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.isConstruct"></a>

```typescript
import { connectUserHierarchyGroup } from '@cdktf/provider-aws'

connectUserHierarchyGroup.ConnectUserHierarchyGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.isTerraformElement"></a>

```typescript
import { connectUserHierarchyGroup } from '@cdktf/provider-aws'

connectUserHierarchyGroup.ConnectUserHierarchyGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.isTerraformResource"></a>

```typescript
import { connectUserHierarchyGroup } from '@cdktf/provider-aws'

connectUserHierarchyGroup.ConnectUserHierarchyGroup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.hierarchyGroupId">hierarchyGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.hierarchyPath">hierarchyPath</a></code> | <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathList">ConnectUserHierarchyGroupHierarchyPathList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.levelId">levelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.instanceIdInput">instanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.parentGroupIdInput">parentGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.instanceId">instanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.parentGroupId">parentGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `hierarchyGroupId`<sup>Required</sup> <a name="hierarchyGroupId" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.hierarchyGroupId"></a>

```typescript
public readonly hierarchyGroupId: string;
```

- *Type:* string

---

##### `hierarchyPath`<sup>Required</sup> <a name="hierarchyPath" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.hierarchyPath"></a>

```typescript
public readonly hierarchyPath: ConnectUserHierarchyGroupHierarchyPathList;
```

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathList">ConnectUserHierarchyGroupHierarchyPathList</a>

---

##### `levelId`<sup>Required</sup> <a name="levelId" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.levelId"></a>

```typescript
public readonly levelId: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instanceIdInput`<sup>Optional</sup> <a name="instanceIdInput" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.instanceIdInput"></a>

```typescript
public readonly instanceIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parentGroupIdInput`<sup>Optional</sup> <a name="parentGroupIdInput" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.parentGroupIdInput"></a>

```typescript
public readonly parentGroupIdInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parentGroupId`<sup>Required</sup> <a name="parentGroupId" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.parentGroupId"></a>

```typescript
public readonly parentGroupId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ConnectUserHierarchyGroupConfig <a name="ConnectUserHierarchyGroupConfig" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupConfig.Initializer"></a>

```typescript
import { connectUserHierarchyGroup } from '@cdktf/provider-aws'

const connectUserHierarchyGroupConfig: connectUserHierarchyGroup.ConnectUserHierarchyGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupConfig.property.instanceId">instanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_group#instance_id ConnectUserHierarchyGroup#instance_id}. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_group#name ConnectUserHierarchyGroup#name}. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_group#id ConnectUserHierarchyGroup#id}. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupConfig.property.parentGroupId">parentGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_group#parent_group_id ConnectUserHierarchyGroup#parent_group_id}. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_group#tags ConnectUserHierarchyGroup#tags}. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_group#tags_all ConnectUserHierarchyGroup#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupConfig.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_group#instance_id ConnectUserHierarchyGroup#instance_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_group#name ConnectUserHierarchyGroup#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_group#id ConnectUserHierarchyGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parentGroupId`<sup>Optional</sup> <a name="parentGroupId" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupConfig.property.parentGroupId"></a>

```typescript
public readonly parentGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_group#parent_group_id ConnectUserHierarchyGroup#parent_group_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_group#tags ConnectUserHierarchyGroup#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_user_hierarchy_group#tags_all ConnectUserHierarchyGroup#tags_all}.

---

### ConnectUserHierarchyGroupHierarchyPath <a name="ConnectUserHierarchyGroupHierarchyPath" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPath"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPath.Initializer"></a>

```typescript
import { connectUserHierarchyGroup } from '@cdktf/provider-aws'

const connectUserHierarchyGroupHierarchyPath: connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPath = { ... }
```


### ConnectUserHierarchyGroupHierarchyPathLevelFive <a name="ConnectUserHierarchyGroupHierarchyPathLevelFive" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFive"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFive.Initializer"></a>

```typescript
import { connectUserHierarchyGroup } from '@cdktf/provider-aws'

const connectUserHierarchyGroupHierarchyPathLevelFive: connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFive = { ... }
```


### ConnectUserHierarchyGroupHierarchyPathLevelFour <a name="ConnectUserHierarchyGroupHierarchyPathLevelFour" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFour"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFour.Initializer"></a>

```typescript
import { connectUserHierarchyGroup } from '@cdktf/provider-aws'

const connectUserHierarchyGroupHierarchyPathLevelFour: connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFour = { ... }
```


### ConnectUserHierarchyGroupHierarchyPathLevelOne <a name="ConnectUserHierarchyGroupHierarchyPathLevelOne" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOne"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOne.Initializer"></a>

```typescript
import { connectUserHierarchyGroup } from '@cdktf/provider-aws'

const connectUserHierarchyGroupHierarchyPathLevelOne: connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOne = { ... }
```


### ConnectUserHierarchyGroupHierarchyPathLevelThree <a name="ConnectUserHierarchyGroupHierarchyPathLevelThree" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThree"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThree.Initializer"></a>

```typescript
import { connectUserHierarchyGroup } from '@cdktf/provider-aws'

const connectUserHierarchyGroupHierarchyPathLevelThree: connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThree = { ... }
```


### ConnectUserHierarchyGroupHierarchyPathLevelTwo <a name="ConnectUserHierarchyGroupHierarchyPathLevelTwo" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwo.Initializer"></a>

```typescript
import { connectUserHierarchyGroup } from '@cdktf/provider-aws'

const connectUserHierarchyGroupHierarchyPathLevelTwo: connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwo = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### ConnectUserHierarchyGroupHierarchyPathLevelFiveList <a name="ConnectUserHierarchyGroupHierarchyPathLevelFiveList" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveList.Initializer"></a>

```typescript
import { connectUserHierarchyGroup } from '@cdktf/provider-aws'

new connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveList.get"></a>

```typescript
public get(index: number): ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference <a name="ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.Initializer"></a>

```typescript
import { connectUserHierarchyGroup } from '@cdktf/provider-aws'

new connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFive">ConnectUserHierarchyGroupHierarchyPathLevelFive</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ConnectUserHierarchyGroupHierarchyPathLevelFive;
```

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFive">ConnectUserHierarchyGroupHierarchyPathLevelFive</a>

---


### ConnectUserHierarchyGroupHierarchyPathLevelFourList <a name="ConnectUserHierarchyGroupHierarchyPathLevelFourList" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourList.Initializer"></a>

```typescript
import { connectUserHierarchyGroup } from '@cdktf/provider-aws'

new connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourList.get"></a>

```typescript
public get(index: number): ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference <a name="ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.Initializer"></a>

```typescript
import { connectUserHierarchyGroup } from '@cdktf/provider-aws'

new connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFour">ConnectUserHierarchyGroupHierarchyPathLevelFour</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ConnectUserHierarchyGroupHierarchyPathLevelFour;
```

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFour">ConnectUserHierarchyGroupHierarchyPathLevelFour</a>

---


### ConnectUserHierarchyGroupHierarchyPathLevelOneList <a name="ConnectUserHierarchyGroupHierarchyPathLevelOneList" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneList.Initializer"></a>

```typescript
import { connectUserHierarchyGroup } from '@cdktf/provider-aws'

new connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneList.get"></a>

```typescript
public get(index: number): ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference <a name="ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.Initializer"></a>

```typescript
import { connectUserHierarchyGroup } from '@cdktf/provider-aws'

new connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOne">ConnectUserHierarchyGroupHierarchyPathLevelOne</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ConnectUserHierarchyGroupHierarchyPathLevelOne;
```

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOne">ConnectUserHierarchyGroupHierarchyPathLevelOne</a>

---


### ConnectUserHierarchyGroupHierarchyPathLevelThreeList <a name="ConnectUserHierarchyGroupHierarchyPathLevelThreeList" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeList.Initializer"></a>

```typescript
import { connectUserHierarchyGroup } from '@cdktf/provider-aws'

new connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeList.get"></a>

```typescript
public get(index: number): ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference <a name="ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.Initializer"></a>

```typescript
import { connectUserHierarchyGroup } from '@cdktf/provider-aws'

new connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThree">ConnectUserHierarchyGroupHierarchyPathLevelThree</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ConnectUserHierarchyGroupHierarchyPathLevelThree;
```

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThree">ConnectUserHierarchyGroupHierarchyPathLevelThree</a>

---


### ConnectUserHierarchyGroupHierarchyPathLevelTwoList <a name="ConnectUserHierarchyGroupHierarchyPathLevelTwoList" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoList.Initializer"></a>

```typescript
import { connectUserHierarchyGroup } from '@cdktf/provider-aws'

new connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoList.get"></a>

```typescript
public get(index: number): ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference <a name="ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.Initializer"></a>

```typescript
import { connectUserHierarchyGroup } from '@cdktf/provider-aws'

new connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwo">ConnectUserHierarchyGroupHierarchyPathLevelTwo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ConnectUserHierarchyGroupHierarchyPathLevelTwo;
```

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwo">ConnectUserHierarchyGroupHierarchyPathLevelTwo</a>

---


### ConnectUserHierarchyGroupHierarchyPathList <a name="ConnectUserHierarchyGroupHierarchyPathList" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathList.Initializer"></a>

```typescript
import { connectUserHierarchyGroup } from '@cdktf/provider-aws'

new connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathList.get"></a>

```typescript
public get(index: number): ConnectUserHierarchyGroupHierarchyPathOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ConnectUserHierarchyGroupHierarchyPathOutputReference <a name="ConnectUserHierarchyGroupHierarchyPathOutputReference" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.Initializer"></a>

```typescript
import { connectUserHierarchyGroup } from '@cdktf/provider-aws'

new connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.property.levelFive">levelFive</a></code> | <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveList">ConnectUserHierarchyGroupHierarchyPathLevelFiveList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.property.levelFour">levelFour</a></code> | <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourList">ConnectUserHierarchyGroupHierarchyPathLevelFourList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.property.levelOne">levelOne</a></code> | <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneList">ConnectUserHierarchyGroupHierarchyPathLevelOneList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.property.levelThree">levelThree</a></code> | <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeList">ConnectUserHierarchyGroupHierarchyPathLevelThreeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.property.levelTwo">levelTwo</a></code> | <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoList">ConnectUserHierarchyGroupHierarchyPathLevelTwoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPath">ConnectUserHierarchyGroupHierarchyPath</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `levelFive`<sup>Required</sup> <a name="levelFive" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.property.levelFive"></a>

```typescript
public readonly levelFive: ConnectUserHierarchyGroupHierarchyPathLevelFiveList;
```

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFiveList">ConnectUserHierarchyGroupHierarchyPathLevelFiveList</a>

---

##### `levelFour`<sup>Required</sup> <a name="levelFour" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.property.levelFour"></a>

```typescript
public readonly levelFour: ConnectUserHierarchyGroupHierarchyPathLevelFourList;
```

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelFourList">ConnectUserHierarchyGroupHierarchyPathLevelFourList</a>

---

##### `levelOne`<sup>Required</sup> <a name="levelOne" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.property.levelOne"></a>

```typescript
public readonly levelOne: ConnectUserHierarchyGroupHierarchyPathLevelOneList;
```

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelOneList">ConnectUserHierarchyGroupHierarchyPathLevelOneList</a>

---

##### `levelThree`<sup>Required</sup> <a name="levelThree" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.property.levelThree"></a>

```typescript
public readonly levelThree: ConnectUserHierarchyGroupHierarchyPathLevelThreeList;
```

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelThreeList">ConnectUserHierarchyGroupHierarchyPathLevelThreeList</a>

---

##### `levelTwo`<sup>Required</sup> <a name="levelTwo" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.property.levelTwo"></a>

```typescript
public readonly levelTwo: ConnectUserHierarchyGroupHierarchyPathLevelTwoList;
```

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathLevelTwoList">ConnectUserHierarchyGroupHierarchyPathLevelTwoList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPathOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ConnectUserHierarchyGroupHierarchyPath;
```

- *Type:* <a href="#@cdktf/provider-aws.connectUserHierarchyGroup.ConnectUserHierarchyGroupHierarchyPath">ConnectUserHierarchyGroupHierarchyPath</a>

---



