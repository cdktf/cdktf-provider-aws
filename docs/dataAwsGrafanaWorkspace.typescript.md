# `dataAwsGrafanaWorkspace` Submodule <a name="`dataAwsGrafanaWorkspace` Submodule" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsGrafanaWorkspace <a name="DataAwsGrafanaWorkspace" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/grafana_workspace aws_grafana_workspace}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.Initializer"></a>

```typescript
import { dataAwsGrafanaWorkspace } from '@cdktf/provider-aws'

new dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace(scope: Construct, id: string, config: DataAwsGrafanaWorkspaceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspaceConfig">DataAwsGrafanaWorkspaceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspaceConfig">DataAwsGrafanaWorkspaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.isConstruct"></a>

```typescript
import { dataAwsGrafanaWorkspace } from '@cdktf/provider-aws'

dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.isTerraformElement"></a>

```typescript
import { dataAwsGrafanaWorkspace } from '@cdktf/provider-aws'

dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.isTerraformDataSource"></a>

```typescript
import { dataAwsGrafanaWorkspace } from '@cdktf/provider-aws'

dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.accountAccessType">accountAccessType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.authenticationProviders">authenticationProviders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.createdDate">createdDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.dataSources">dataSources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.grafanaVersion">grafanaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.lastUpdatedDate">lastUpdatedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.notificationDestinations">notificationDestinations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.organizationalUnits">organizationalUnits</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.organizationRoleName">organizationRoleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.permissionType">permissionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.samlConfigurationStatus">samlConfigurationStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.stackSetName">stackSetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `accountAccessType`<sup>Required</sup> <a name="accountAccessType" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.accountAccessType"></a>

```typescript
public readonly accountAccessType: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `authenticationProviders`<sup>Required</sup> <a name="authenticationProviders" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.authenticationProviders"></a>

```typescript
public readonly authenticationProviders: string[];
```

- *Type:* string[]

---

##### `createdDate`<sup>Required</sup> <a name="createdDate" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.createdDate"></a>

```typescript
public readonly createdDate: string;
```

- *Type:* string

---

##### `dataSources`<sup>Required</sup> <a name="dataSources" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.dataSources"></a>

```typescript
public readonly dataSources: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `grafanaVersion`<sup>Required</sup> <a name="grafanaVersion" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.grafanaVersion"></a>

```typescript
public readonly grafanaVersion: string;
```

- *Type:* string

---

##### `lastUpdatedDate`<sup>Required</sup> <a name="lastUpdatedDate" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.lastUpdatedDate"></a>

```typescript
public readonly lastUpdatedDate: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `notificationDestinations`<sup>Required</sup> <a name="notificationDestinations" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.notificationDestinations"></a>

```typescript
public readonly notificationDestinations: string[];
```

- *Type:* string[]

---

##### `organizationalUnits`<sup>Required</sup> <a name="organizationalUnits" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.organizationalUnits"></a>

```typescript
public readonly organizationalUnits: string[];
```

- *Type:* string[]

---

##### `organizationRoleName`<sup>Required</sup> <a name="organizationRoleName" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.organizationRoleName"></a>

```typescript
public readonly organizationRoleName: string;
```

- *Type:* string

---

##### `permissionType`<sup>Required</sup> <a name="permissionType" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.permissionType"></a>

```typescript
public readonly permissionType: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `samlConfigurationStatus`<sup>Required</sup> <a name="samlConfigurationStatus" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.samlConfigurationStatus"></a>

```typescript
public readonly samlConfigurationStatus: string;
```

- *Type:* string

---

##### `stackSetName`<sup>Required</sup> <a name="stackSetName" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.stackSetName"></a>

```typescript
public readonly stackSetName: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsGrafanaWorkspaceConfig <a name="DataAwsGrafanaWorkspaceConfig" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspaceConfig.Initializer"></a>

```typescript
import { dataAwsGrafanaWorkspace } from '@cdktf/provider-aws'

const dataAwsGrafanaWorkspaceConfig: dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspaceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspaceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspaceConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspaceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspaceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspaceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspaceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspaceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspaceConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/grafana_workspace#workspace_id DataAwsGrafanaWorkspace#workspace_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspaceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/grafana_workspace#id DataAwsGrafanaWorkspace#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspaceConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/grafana_workspace#tags DataAwsGrafanaWorkspace#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspaceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspaceConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspaceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspaceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspaceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspaceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspaceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspaceConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/grafana_workspace#workspace_id DataAwsGrafanaWorkspace#workspace_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspaceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/grafana_workspace#id DataAwsGrafanaWorkspace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspaceConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/grafana_workspace#tags DataAwsGrafanaWorkspace#tags}.

---



